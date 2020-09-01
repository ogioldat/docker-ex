const app = require("express")();

const port = process.env.PORT = 8080;

app.get('*', (req, res) => {
    res.json({
        msg: 'app started 🐋'
    })
})

app.listen(port, () => console.log(`server is running at port: ${port}`));
