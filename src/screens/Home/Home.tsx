import React, { useContext, useEffect, useState } from "react";

import Card from "components/Card/Card";
import Navbar from "components/Navbar/Navbar";
import Search from "components/Search/Search";
import AuthContext from "context/provider/AuthProvider";
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
  const [options, setOptions] = useState<string[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [liked, setLiked] = useState<string[]>([]);

  useEffect(() => {
    if (searchValue.length > 0) {
      setErrorMessage(false);
    }
  }, [searchValue]);

  useEffect(() => {
    const item = localStorage.getItem("@mediapark/options");
    if (item) {
      const storedNames = JSON.parse(item);
      setOptions(storedNames);
    }
  }, []);

  const handleLiked = async (photo_id: string) => {
    try {
      if (liked.includes(photo_id)) {
        await api.delete(`https://api.unsplash.com/photos/${photo_id}/like`);
        setLiked((prev) => [
          ...prev.filter((item: string) => item !== photo_id)
        ]);
      } else {
        await api.post(`https://api.unsplash.com/photos/${photo_id}/like`);
        setLiked((prev) => [...prev, photo_id]);
      }
    } catch (error) {
      setError(error);
    }
  };

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    let matches: string[] = [];
    if (text.length > 0) {
      matches = options.filter((option: string) => {
        const regex = new RegExp(`${text}`, "gi");
        return option.match(regex);
      });
    }
    setSuggestions(matches);
    setSearchValue(text);
  };

  const setValueLocalStorage = (value: string[]) => {
    window.localStorage.setItem("@mediapark/options", JSON.stringify(value));
  };

  const handleAutocompleteOptions = () => {
    const item = localStorage.getItem("@mediapark/options");

    if (item) {
      const storedNames = JSON.parse(item);
      const newStorageOptions = [
        ...new Set([searchValue, ...storedNames])
      ] as string[];

      if (newStorageOptions.length > 5) {
        newStorageOptions.pop();
      }

      setOptions(newStorageOptions);
      setValueLocalStorage(newStorageOptions);
    } else {
      setValueLocalStorage([searchValue]);
    }
  };

  const handleSubmitSearch = async () => {
    if (searchValue === "") {
      setErrorMessage(true);
    }

    try {
      const { data } = await api.get(
        `https://api.unsplash.com/search/photos?client_id=${
          process.env.REACT_APP_ACCESS_KEY
        }&query=${searchValue}&per_page=${28}`
      );

      handleAutocompleteOptions();

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
      setError(error);
    }
  };

  return (
    <main>
      <Navbar onClick={handleRemoveToken} />
      <S.Div>
        <Search
          onChange={(e) => handleSearchValue(e)}
          onClick={handleSubmitSearch}
          value={searchValue}
          errorMessage={errorMessage}
          suggestions={suggestions}
          setSearchValue={setSearchValue}
          setSuggestions={setSuggestions}
        />
      </S.Div>
      <S.Container>
        {photos?.map((photo) => (
          <Card
            key={photo.id}
            photo={photo}
            liked={liked}
            handleLiked={handleLiked}
          />
        ))}
        {error ? error : null}
      </S.Container>
    </main>
  );
};

export default Home;
