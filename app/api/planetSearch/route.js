
import { NextResponse } from "next/server";

const BASE_URL = "https://swapi.dev/api/"

export async function POST(request) {
  const { name } = await request.json();
  const res = await fetch(`${BASE_URL}planets/?search=${name}`);
  const data = await res.json();
  return NextResponse.json(data);
}
