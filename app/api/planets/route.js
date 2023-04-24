import { NextResponse } from "next/server";
import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/planets/?search='

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const param = searchParams.get('search')
  console.log(param);
  const res = await axios.get(`${BASE_URL}${param}`)
  const planet = await res.data;
  const planets = JSON.stringify(planet.results[0]);
  // console.log(chars);

  return new NextResponse(planets);
}
