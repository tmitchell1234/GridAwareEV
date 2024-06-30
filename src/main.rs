/*
    GRID AWARE EV CHARGING - Web server

    A Computer Science Senior Design project by:
    JV
    BB
    SP
    TM
*/
use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use dotenvy::dotenv;
use serde::{Deserialize, Serialize};

#[derive(Deserialize)]
struct MyParams {
    name: String,
}

async fn index(params: web::Json<MyParams>) -> impl Responder {
    HttpResponse::Ok().body(format!("Hello, {}!\n", params.name))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::post().to(index))
    })
    .bind("127.0.0.1:8080")?  // Change port if needed
    .run()
    .await
}