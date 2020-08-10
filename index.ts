import app from './app.ts'
import configure from './config/config.ts'

const main = async () => {
    const { PORT, HOSTNAME } = configure;
    console.log(`server running on http://${HOSTNAME}:${PORT}`)
    await app.listen({ port: parseInt(PORT), hostname: HOSTNAME });
}

main();