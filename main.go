package main

import (
    "html/template"
    "log"
    "net/http"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
    t, _ := template.ParseFiles("tmpl/index.html")
    t.Execute(w, nil)
}

func main() {
    http.HandleFunc("/clarkegories", homeHandler)

    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

    log.Fatal(http.ListenAndServe(":8080", nil))
}
