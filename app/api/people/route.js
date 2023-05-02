import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = "https://swapi.dev/api/people/?search=";

// SerpApi setup
const SERP_API_KEY = process.env.SERP_KEY;
import SerpApi from "google-search-results-nodejs";
const search = new SerpApi.GoogleSearch(SERP_API_KEY);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const param = searchParams.get("search");
  if (!param) {
    return new NextResponse("Search Parameter not found, {status: 500}");
  }
  try {
    const res = await axios.get(`${BASE_URL}${param}`);
    if (res.data.count === 0) {
      console.log("Character does not exist");
      return new NextResponse("Character does not exist, {status: 500}");
    }
    const char = JSON.stringify(res.data.results[0]);

    const serpParams = {
      q: char.name,
      tbm: "isch",
      ijn: 0,
      safe: "active",
      star: 1,
      num: 1,
    };
    const callback = (data) => {
      console.log(data)
    };

    const pic = search.json(serpParams, callback);


    return new NextResponse(char, pic);
  } catch (error) {
    console.log("Could not find Character", error);
  }
}
