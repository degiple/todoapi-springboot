# todoapi-springboot

アプリケーションの実行 with gradle

```shell
# アプリケーション実行
./gradlew bootRun

# ビルド & jar実行
./gradlew build
java -jar build/libs/todoapi-0.0.1-SNAPSHOT.jar
```

Todo API の動作確認

```shell
## 登録
curl http://localhost:8080/api/todoitems -XPOST \
-H 'Content-Type: application/json' \
-d '{"name": "my first item"}' | jq .

## リスト
curl http://localhost:8080/api/todoitems

## １件取得
curl http://localhost:8080/api/todoitems/1

## 削除
curl http://localhost:8080/api/todoitems/1 -XDELETE -v

```
