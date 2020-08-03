# do-not-disturb

## Why this exists
Due to the large increase of working from home/online education. It can be hard to communicate with the people that you live with when you are busy or free. This project aims to fix that. This allows you to display messages on other devices on the same network. See examples below.

## Prerequisites
- NodeJS

## Running locally
1) Clone/download the project
2) In terminal/cmd, navigate to `do-not-disturb/`
3) Install modules
```bash
npm install
```
4) Run the project
```bash
npm start
```
5) On your web browser, navigate to [localhost:3333](http://localhost:3333)
>In order to get other devices to access this, they will need to be connected to the same network and navigate to your <private_ip_address>:3333

## Changing status
1) On your web browser, navigate to [localhost:3333/status.html](http://localhost:3333/status.html)
2) Click on one of the buttons and wait a few seconds to see change appear on [localhost:3333](http://localhost:3333)

## Devices supported
Any device with a web browser should be able to support this. Just make sure you are on the same network as the computer that is running the project. On the other device, just navigate to the the **<private_ip_address>:3333** of the computer running the project.
>If you do not know how to get your private ip address, Google: `how to get my private ip address on <OS>`

## Examples
![pi_running_do-not-disturb](https://i.imgur.com/LKA1bXm.jpg)
>This is a raspberry pi w/ pi display and a cheap case from Amazon.
![phone_running_do-not-disturb](https://i.imgur.com/1xsUCOs.jpg)