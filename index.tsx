// @deno-types="https://deno.land/x/servest@v1.3.1/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.1/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import {
  createApp,
  contentTypeFilter,
} from "https://deno.land/x/servest@v1.3.1/mod.ts";

const app = createApp();
const colors: string[] = [];

interface IApp {
  colorsProp: string[];
}

const App = ({ colorsProp }: IApp) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <title>Desafío 47</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
    </head>
    <body style={{ background: "#D0D0D0", display:'flex', alignItems:'center' , justifyContent:'center'}}>
        <div className="card text-center"  style={{width: '24rem', minHeight:'20rem', border:'solid 1px #5D89FF'}}>
          <div className="card-header">
            <form method="POST" action="/set-color">
              <div className="input-group mb-3">
                <input name="color" type="text" className="form-control" placeholder="Escriba un color" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-primary">Guardar</button>
              </div>
            </form>
          </div>
          <div className="card-body text-start">
            <ul>
              { colorsProp.map((color, index) => (
                <li key={index} style={{ color }}>
                  {color}
                </li>
              )) }
            </ul>
          </div>
          <div className="card-footer text-muted">
            Desafio 47
          </div>
        </div>
    </body>
  </html>
);

const headers = {
  "content-type": "text/html; charset=UTF-8",
};

app.handle("/", async (req) => {
  return await req.respond({
    status: 200,
    headers: new Headers(headers),
    body: ReactDOMServer.renderToString(<App colorsProp={colors} />),
  });
});

app.handle("/set-color", async (req) => {
  const bodyForm = await req.formData();
  const color = bodyForm.value("color");
  colors.push(color as string);
  await req.respond({
    status: 200,
    headers: new Headers(headers),
    body: ReactDOMServer.renderToString(<App colorsProp={ colors } />),
  });
});

app.listen({ port: 3000 });