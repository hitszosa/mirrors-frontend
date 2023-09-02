export default defineEventHandler(async () => {
  try {
    const tunasync = await fetch(
      'https://mirrors.tuna.tsinghua.edu.cn/static/tunasync.json',
    )
    const data = tunasync.json()
    return data
  } catch (e) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Can\'t get mirrorlist data!',
    })
  }
})
