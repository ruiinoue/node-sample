# Gulp の基本

## タスクの定義

`gulp.task(name, [, deps] [, fn])`

- name (string)
  タスク名を指定。
- deps (string[])
  前提となるタスクリストを指定。
- fn (function)
  実行したいタスクの実態を指定。
