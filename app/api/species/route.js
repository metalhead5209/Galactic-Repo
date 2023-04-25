import { NextResponse } from "next/server";
import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/species/?search='

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const param = searchParams.get('search')
  console.log(param);
  const res = await axios.get(`${BASE_URL}${param}`)
  const spec = await res.data;
  const specs = JSON.stringify(spec.results[0]);

  return new NextResponse(specs);
}
