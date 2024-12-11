local internet = require("internet")  
local compo = require("component")
local netDriver = compo.internet
local handle = internet.open("http://127.0.0.1",2879)
    print("Heh")
    local data = handle:read()
    print(data)