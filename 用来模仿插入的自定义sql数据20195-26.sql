# *********************
# 第一次不看教程写sql好刺激啊

# Dump of table contents
# -------------------------

DROP TABLE IF EXISTS `contents`;

CREATE TABLE `contents` (
	`cid` int(11) unsigned Not NULL AUTO_INCREMENT,
	`uid` int(11) unsigned DEFAULT NULL,
	`content` varchar(2000) DEFAULT NULL,
	`dateline` int(10) unsigned DEFAULT '0',
	`lable` varchar(200) DEFAULT NULL,
	`support` int(11) unsigned DEFAULT '0',
	`oppose` int(11) unsigned DEFAULT '0',
	PRIMARY KEY (`cid`),
	KEY `uid` (`oppose`),
	KEY `lable` (`lable`),
	KEY `support` (`support`),
	KEY `oppose` (`oppose`)
) ENGINE=MYISAM DEFAULT CHARSET=utf8;


# Dump of table users
# --------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
	`uid` int(11) unsigned NOT NULL AUTO_INCREMENT,
	`username` char(16) DEFAULT NULL,
	`password` char(32) DEFAULT NULL,
	`email` char(32) DEFAULT NULL,
	`avatar` tinyint(1) unsigned DEFAULT '1',
	`login_key` varchar(32) DEFAULT NULL,
	PRIMARY KEY (`uid`),
	KEY `username` (`username`),
	KEY `password` (`password`),
	KEY `email` (`email`)
) ENGINE=MYISAM DEFAULT CHARSET=utf8;


