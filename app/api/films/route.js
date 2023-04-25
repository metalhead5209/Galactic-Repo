import { NextResponse } from "next/server";
import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/films/'

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const param = searchParams.get('search')
  console.log(param);
  const res = await axios.get(`${BASE_URL}${param}`)
  const film = await res.data;
  const films = JSON.stringify(film);

  return new NextResponse(films);
}
