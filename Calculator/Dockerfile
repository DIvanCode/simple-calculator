FROM mcr.microsoft.com/dotnet/sdk:8.0

EXPOSE 5050

WORKDIR /Source

COPY . .

RUN dotnet publish Calculator.sln -p:PublishDir=/Build


WORKDIR /App

ENV ASPNETCORE_URLS=http://0.0.0.0:8080

CMD ["/Build/Calculator"]
