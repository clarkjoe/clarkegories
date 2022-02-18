package main

import (
    "fmt"
    "html/template"
    "log"
    "net/http"
    "time"
)

type Player struct {
    ID string `json:"id"`
    Username string `json:"username"`
    Catergories []string `json:"catergories"`
}

type Game struct {
    ID string `json:"id"`
    Players []Player `json:"players"`
    TOC time.Time `json:"toc"`
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
    t, _ := template.ParseFiles("home.html")
    t.Execute(w, nil)
}

func createGameHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "createGameHandler. %s", r.URL.Path[1:])
}

func joinGameHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "joinGameHandler. %s", r.URL.Path[1:])
}

func startGameHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "startGameHandler. %s", r.URL.Path[1:])
}

func addCategoryHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "addCategoryHandler. %s", r.URL.Path[1:])
}

func displayListHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "displayListHandler. %s", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/clarkegories", homeHandler)
    http.HandleFunc("/clarkegories/creategame", createGameHandler)
    http.HandleFunc("/clarkegories/joingame", joinGameHandler)
    http.HandleFunc("/clarkegories/startgame", startGameHandler)
    http.HandleFunc("/clarkegories/addcategory", addCategoryHandler)
    http.HandleFunc("/clarkegories/displaylist", displayListHandler)
    log.Fatal(http.ListenAndServe(":8080", nil))
}
