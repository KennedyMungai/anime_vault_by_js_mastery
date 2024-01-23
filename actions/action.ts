'use server'

export const fetchAnime = async () => {
    const res = await fetch('https://shikimori.one/api/animes')
    const data = await res.json()
    console.log(data)
    return data
}