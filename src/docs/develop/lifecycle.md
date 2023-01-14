# 插件生命周期 {#plugin-lifecycle}

> 逐步完善中, 可先参考 [`KiviPlugin API`](/api/plugin)

一个插件的完整周期：

1. 插件完成编写（JS 符合 CommonJS, TS 编译成符合 CommonJS 的 JS）
2. 框架管理员通过 `/plugin on <name>` 启用插件
3. 框架检测到启用指令, 通过 `require` 引入插件
4. 插件模块被引入时, 执行外层逻辑（创建 `KiviPlugin` 实例等）
5. 插件执行 `plugin.onMounted()`。（传入的函数中，可调用【插件 API】监听事件、创建定时任务等，还可调用【oicq API】可以进行一系列支持的 Bot 操作）
6. 当【相关事件】、【定时任务】等触发时, 调用 `plugin` 监听事件绑定的函数进行处理
7. 框架管理员通过 `/plugin off <name>` 禁用插件
8. 插件执行 `plugin.onUnmounted()`, 同时自动取消监听事件, 清理定时任务
9. 框架删除插件引入的 `require` 缓存
10. 结束

::: tip 小提示
重载命令 `/plugin reload <name>` 等同于先禁用插件，再启用插件。
:::
