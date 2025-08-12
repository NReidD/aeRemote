local shell = require("shell")

-- URL of the raw Pastebin script
local url = "https://pastebin.com/raw/4vdtRwL7"

-- Destination path for the script
local filePath = "/home/output.lua"

-- Use wget to download the script
local command = "wget -f " .. url .. " " .. filePath
local result = shell.execute(command)

-- Check if the download was successful
if result then
  print("Script downloaded successfully.")

  -- Run the downloaded script
  --shell.execute("lua " .. filePath)
else
  print("Error: Failed to download the script.")
end
