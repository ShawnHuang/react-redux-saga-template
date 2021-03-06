# Prerequisite

- Nodejs 10

# Usage

## Start

1. Install dependency.

    ```
    npm install
    ```

2. Set up configurations.

    ```
    cp src/config/config.sample.json src/config/config.json
    ```

3. Compile **typescript** to **javascript**.

    ```
    npm run build
    ```

4. Start server.

    ```
    npm run start
    ```

OK! Now you can visit http://localhost:5566 to watch slideshow or play game.

Visit http://localhost:5566/admin-index.html and login(default password:happy) to control the state.

# How to develop
1. Compile typescript in watch mode: `npm run dev`
2. Modify the code under *src*
3. Every time you modify the code, the server will auto hot-reload :)

# Test
To be completed
