# try_frisby

[Frisby](https://www.frisbyjs.com)のチュートリアルをちょっと触ってみるだけのリポジトリ. まず愚直に公式のdocを読んでいく.
ついでにくっそ久々にjsを触るのでちょっと感じを思い出したいという気持ちもある.

## How Starting

まずリポジトリを作った思考停止して `yarn init` たたくやん. それは覚えてる. 対話形式のやつをてきとーにエンターしてくやん.
で、その後必要そうなパッケージを追加してく. とりあえず `yarn add frisby` やん.

```bash
yarn init
yarn add frisby
```

でもって`ES2016`で書きたいやん. `lint`もほしい. で, `eslint`,`babel`.

```bash
yarn add  babel-cli babel-preset-env eslint
```

いちいちterminalもどってテスト実行とかしてられないから, だれかに`watch`してほしいやん. このへんで `frisby`がjestの拡張(?)だったことを思い出して `jset` を入れれば`--watch`できるなーと`jest`を入れる. でも`frisby`で入っている可能性もあるので無意味っぽいけどまあいいや. ついでに `jset-runner-eslint`も入れる.

```bash
yarn init
yarn add jest jest-runner-eslint
```

で, `eslint`の設定をしないといけないので、以下のコマンドで対話型式で適当にきめる.

```bash
yarn eslint --init
```

ここで, 期待した動きをしているのかどうかを確認するためだけに `yarn jest`してみる. `testMatchしねーぞ！！！` と言われるので, これまた対話形式でjestのconfigを書いていく.

```bash
yarn jest --init
```

その他にも独自に設定を少し加えた。詳しくは`jest.config.js`をチェケラ.

設定が期待したとおりのものをかどうかをテストするために`tests/first.js`を書いた.

```js=
test('first test', () => {
    expect(true).toBe(true)
})
```

が, ダメ……ッ.

```bash
try_frisby (master): yarn jest
yarn run v1.13.0
$ /Users/say0213/try/try_frisby/node_modules/.bin/jest
 FAIL   ES lint  tests/first.js

/Users/say0213/try/try_frisby/tests/first.js
  1:1  error  'test' is not defined    no-undef
  2:5  error  'expect' is not defined  no-undef

✖ 2 problems (2 errors, 0 warnings)
```

jestで実行したときは, jestは`import`しなくても良かったはずなんだけどなー.で、[しらべてみたら](https://stackoverflow.com/questions/41324636/how-to-import-jest), `.eslint.js`の環境変数を設定する必要があったので, 追加しとく.

ここまでで, よーやくテストが通った.

```bash
try_frisby (master): yarn jest
yarn run v1.13.0
$ /Users/say0213/try/try_frisby/node_modules/.bin/jest
 PASS   ES lint  tests/first.js
 PASS   tests  tests/first.js

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.877s
Ran all test suites in 2 projects.
✨  Done in 5.09s.
try_frisby (master):
```

## frisby

あとは `yarn jest --watch`でチュートリアルをやっていくだけ. やっていくだけなんだけど例示されたコードの中でリクエスト先を`example.com`から[`httpbin.org`](https://httpbin.org)に変更した.
