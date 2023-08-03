require('dotenv').config({ path: '/app/.env' })

// console.log(process.env)

console.log(process.env.TEST_DOTENV)

async function wait() {
    while(true) {
        await new Promise(resolve => setTimeout(resolve, 60000));
        console.log("tick")
    }
}

wait()
