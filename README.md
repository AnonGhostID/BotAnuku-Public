# BotAnuku - Public (MD)

## ⚠️ This code is based on [`azamibot`](https://github.com/clicknetcafe/azamibot-md-multi) ⚠️
### With several heavily modded features/plugins, some plugins are dependent on AzamiBot database.

<!-- This Script is for everyone, original base by [`BochilGaming`](https://github.com/BochilGaming/games-wabot-md)


<p align="center">
      <img src="https://i.ibb.co/DR4vjVN/nother.jpg" width="55%" style="margin-left: auto;margin-right: auto;display: block;">
</p>

If you want to add Node Modules manually, download here : [`node_modules`](https://cutt.ly/zeren-node-modules)

This is Script of WhatsApp multi device, working with [`@whiskeysockets/baileys`](https://github.com/whiskeysockets/baileys) -->

## Run

```bash
node . [<arguments>]
```

---------

## Arguments `node . [--options] [<session name>]`
### `Contoh: node . --autoread`

### `--pairing`
Link device via pairing

### `--mobile`
Link device via mobile captcha (blm tes, rawan ban katanya)

### `--self`
Mode self (gak ada yang bisa gunakan, kecuali nomor bot dan owner)

### `--pconly`
Bot cuma bisa dipakai di Private Chat (kecuali user premium)

### `--gconly`
Bot cuma bisa dipakai di Grup (kecuali user premium)

### `--swonly`
bot cuma respon dari status

### `--server`
Untuk [heroku](https://heroku.com/) atau scan lewat website

### `--restrict`
Enables restricted plugins (which can lead your number to be **banned** if used too often)

* Group Administration `add, kick`

### `--img`
Enable image inspector through terminal

### `--autoread`
Autoread pesan

### `--autocleartmp`
If enabled, **tmp* folder contain files will be auto delete

### `--nyimak`
Bot nyimak doang, nampilin pesan di console dan add user ke database

### `--test`
**Development** Testing Mode

### `--db`
pass mongodb url or cloud url to connect to database, by the default it will connect to database.json

---------

### Cara set Nomor Owner ?

> Via command: .addrealowner saat bot berjalan, atau set dalam file `config.js`, di global.mods..
```js
global.mods = ['6281112223334']
```
> Contoh nomor `6281112223334`, bisa add lebih dari 1

---------

#### Original Base From :
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)