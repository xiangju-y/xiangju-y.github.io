var posts=["2024/12/12/一些文件/项目/centos7-php7.2安装/","2024/05/03/一些文件/项目/综合项目大全/大致虚拟机/","2024/09/20/linux/crontab/","2024/04/25/linux/linux/","2024/04/16/linux/shell脚本/","2024/04/16/linux/nfs/","2024/05/11/linux/nginx配置文件介绍/","2024/05/02/一些文件/项目/java_pig/java_pig/","2024/05/02/windows/ssh/","2024/05/11/linux/nginx安装/","2024/04/16/linux/dokcer/","2024/06/19/linux/history行号问题/","2024/04/16/linux/ansible/","2024/05/19/linux/各种源配置/","2022/09/29/python/python学习中的笔记/","2024/05/02/linux/淘宝nginx/","2024/05/03/windows/vmware/","2024/04/01/杂谈/记录中国移动停机的一次记录/","2024/04/16/linux/linux python安装/","2024/04/25/windows/vscode/","2024/09/20/linux/mysql/","2021/09/20/杂谈/记录一次小米路由器4c刷机过程/","2024/05/03/zabbix/zabbix/","2024/05/19/windows/奇安信天擎退出有密码解决方案/","2024/04/16/一些文件/项目/lifeRestart/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };