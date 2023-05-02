import { NextResponse } from "next/server";
import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/species/?search='

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const param = searchParams.get('search')
  if(!param) {
    return new NextResponse("Search Parameter not found, {status: 500}");
  }
  try {
    const res = await axios.get(`${BASE_URL}${param}`)
    if(res.data.count === 0) {
      console.log("Species does not exist");
      return new NextResponse("Species does not exist, {status: 500}");
    }
    const species = JSON.stringify(res.data.results[0]);
    return new NextResponse(species);
  } catch (error) {
      console.log("Could not find Species", error )
  }

}
