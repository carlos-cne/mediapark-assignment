import Card from "components/Card/Card";
import ImageSection from "components/ImageSection/ImageSection";
import Navbar from "components/Navbar/Navbar";
import Search from "components/Search/Search";
import UserInfoSection from "components/UserInfoSection/UserInfoSection";
import AuthContext from "context/provider/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import api from "services/api";

import * as S from "./styled";

type APIResponse = {
  alt_description: string;
  description: string;
  id: string;
  likes: number;
  photo: string;
  urls: {
    regular: string;
  };
  user: {
    name: string;
    profile_image: {
      medium: string;
    };
  };
};

export type UserProps = {
  name: string;
  profile_photo: string;
};

export type PhotoProps = {
  alt_description: string;
  description: string;
  id: string;
  likes: number;
  photo: string;
  user: UserProps;
};

const Home = () => {
  const { handleRemoveToken } = useContext(AuthContext);

  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [photos, setPhotos] = useState<PhotoProps[]>([]);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleSubmitSearch = async () => {
    if (searchValue === "") {
      setErrorMessage(true);
    }

    try {
      const { data } = await api.get(
        `https://api.unsplash.com/search/photos?client_id=${
          process.env.REACT_APP_ACCESS_KEY
        }&query=${searchValue}&page=${1}&per_page=${28}`
      );

      if (data) {
        setPhotos(
          data.results.map((res: APIResponse) => ({
            id: res?.id,
            likes: res?.likes,
            alt_description: res?.alt_description,
            description: res?.description,
            photo: res?.urls?.regular,
            user: {
              name: res.user.name,
              profile_photo: res.user.profile_image.medium
            }
          }))
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      setErrorMessage(false);
    }
  }, [searchValue]);

  return (
    <main>
      <Navbar onClick={handleRemoveToken} />
      <S.Div>
        <Search
          onChange={(e) => handleSearchValue(e)}
          onClick={handleSubmitSearch}
          value={searchValue}
          errorMessage={errorMessage}
        />
      </S.Div>
      <S.Container>
        {photos.map((photo) => (
          <Card key={photo.id}>
            <UserInfoSection
              profile_photo={photo.user.profile_photo}
              name={photo.user.name}
            />
            <ImageSection
              photo={photo.photo}
              alt_description={photo.alt_description}
              likes={photo.likes}
            />

            <div
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "220px",
                height: "1.2em",
                whiteSpace: "nowrap",
                padding: "20px 10px 20px 15px",
                fontSize: "12px",
                display: "flex",
                alignItems: "center"
              }}
            >
              {photo.description ? (
                <>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      marginRight: "5px"
                    }}
                  >
                    Description:
                  </span>
                  {photo.description}
                </>
              ) : (
                "No Description Available"
              )}
            </div>
          </Card>
        ))}
      </S.Container>
    </main>
  );
};

export default Home;
