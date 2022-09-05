# todoapi-springboot

```shell
# アプリケーション実行
./gradlew bootRun

# ビルド & jar実行
./gradlew build
java -jar build/libs/todoapi-0.0.1-SNAPSHOT.jar

# todo

## 登録
curl http://localhost:8080/api/todoitems -XPOST \
-H 'Content-Type: application/json' \
-d '{"summary": "my first item"}' | jq .

## リスト
curl http://localhost:8080/api/todoitems

```
