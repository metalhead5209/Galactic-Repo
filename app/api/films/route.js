import { NextResponse } from "next/server";
import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/films/'

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const param = searchParams.get('search')
  if(!param) {
    return new NextResponse("Search parameter not found, {status: 500}");
  }
  try {
    const res = await axios.get(`${BASE_URL}${param}`)
    if(res.data.count === 0) {
      console.log("Character does not exist");
      return new NextResponse("Film does not exist, {status: 500}")
    }
    const film = JSON.stringify(res.data)
    return new NextResponse(film);
  } catch (error) {
    console.log('Could not find Film', error)
  }
 
}
