local component = require("component")
local event = require("event")
local os = require("os")
local term = require("term")
term.clear()

-- Get the screen component (you can replace this with your screen's specific address)
local screen = component.list("screen")() 
local gpu = component.proxy(component.list("gpu")())
local w, h = gpu.getResolution()
gpu.fill(1, 1, w, h, " ") -- clears the screen
gpu.setForeground(0x000000)
gpu.setBackground(0xFFFFFF)
gpu.fill(50, 50, w/2, h/2, "X")
gpu.copy(1, 1, w/2, h/2, w/2, h/2) -- copy top left quarter of screen to lower right

-- Ensure the GPU is set to use the screen
gpu.bind(screen)

-- Clear the screen

-- Print a message asking the user to click somewhere
term.write("Click anywhere on the screen to get the coordinates.\n")

-- Event loop: wait for mouse click event
while true do
    -- Wait for the 'touch' event (mouse click) and capture the x, y coordinates
    local _, _, x, y = event.pull("touch")
    if x>50 then
        print("WHAMMY")
        os.execute('lua hello.lua')
        os.execute('lua os.exit()')
    end
    -- Print the coordinates of the mouse click
    print("Mouse clicked at: x = " .. x .. ", y = " .. y)
end
