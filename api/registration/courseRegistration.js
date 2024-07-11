import { useRuntimeConfig } from '#imports';

export default async function courseRegistration(opts) {
  const config = useRuntimeConfig();

  try {
    const headers = {
      'Accept': 'application/vnd.api+json',
      'Access-Token': 'Bearer 66854c087a587.17969aa514e52397e0c942d2dbf772f1',
      'Content-Type': 'application/vnd.api+json',
    };
    const { data } = await useAsyncData('register', () =>
      $fetch(`v1/course/registration`, {
        baseURL: config.public.baseURL,
        headers,
        method: 'POST',
        body: {
          ...opts,
        },
      }),
    );

    return data.value;
  } catch {
    return [];
  }
}
