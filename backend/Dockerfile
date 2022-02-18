FROM golang:1.17
WORKDIR /backend
COPY go.mod ./
COPY go.sum ./
RUN go mod download
COPY . .
RUN go build -o /docker-prac-sopes
EXPOSE 9000
CMD ["/docker-prac-sopes"]