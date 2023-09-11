export type InfoFromApi = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  

  export type CharacterFromApi = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[]; // Puede ser un array de URLs de episodios
    url: string;
    created: string; // Debes considerar si deseas manejar esto como una fecha en TypeScript
  };
  