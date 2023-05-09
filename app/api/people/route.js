import { NextResponse } from "next/server";
import axios from "axios";
import * as SerpApi from "google-search-results-nodejs";

const BASE_URL = "https://swapi.dev/api/people/?search=";

const search = new SerpApi.GoogleSearch(process.env.API_KEY);

const MAX_IMAGE_ID = 200;

function getRandomImageId() {
  return Math.floor(Math.random() * MAX_IMAGE_ID) + 1;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("search");

  if (!query) {
    return new NextResponse("Search parameter not found", { status: 500 });
  }

  try {
    // Perform SerpApi image search with the specified query
    const params = {
      q: query,
      tbm: "isch",
      ijn: 0,
      safe: "active",
      star: 1,
      num: 1,
    };

    const callback = (data) => {
      const IMAGE = {
        id: getRandomImageId(),
        url: data["images_results"][Math.floor(Math.random() * 20)]["original"],
      };
      console.log(IMAGE.url);
      return IMAGE;
    };

    const [image, response] = await Promise.all([
      search.json(params, callback),
      axios.get(`${BASE_URL}${query}`),
    ]);

    if (response.data.count === 0) {
      console.log("Character does not exist");
      return new NextResponse("Character does not exist", { status: 500 });
    }

    const char = JSON.stringify(response.data.results[0]);
    return new NextResponse(char, {
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(image),
    });
  } catch (error) {
    console.log("Error: ", error);
    return new NextResponse("Could not find character or image", {
      status: 500,
    });
  }
}
