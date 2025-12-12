import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function search(query, page, per_page) {
  const res = await axios.get(`${BASE_URL}/meta/anilist-manga/${encodeURIComponent(query)}?page=${page}&per_page=${per_page}`);
  return res.data;
}

export async function getTitle(titleId, provider) {
  const res = await axios.get(`${BASE_URL}/meta/anilist-manga/info/${titleId}?provider=${provider}`);
  return res.data;
}

export async function getChapter(chapterId, provider) {
  const res = await axios.get(`${BASE_URL}/meta/anilist-manga/read?chapterId=${chapterId}&provider=${provider}`)
  return res.data;
}