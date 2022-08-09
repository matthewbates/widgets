export default async (location) => {
  try {
    const result = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={1bf6a58ea4dd5073cf1ea98128e22991
}&units=metric`
    );

    if (result.status === 200) {
      return { success: true, data: await result.json() };
    }

    return { success: false, error: result.statusText };
  } catch (ex) {
    return { success: false, error: ex.message };
  }
};
