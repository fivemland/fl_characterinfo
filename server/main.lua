ESX.RegisterServerCallback('adam_characterinfo:Name', function(source, cb)
    local xPlayer = ESX.GetPlayerFromId(source)
    local identifier = GetPlayerIdentifier(xPlayer)
    local PlayerName = xPlayer.getName()
    local Bank = xPlayer.getAccount('bank').money
    local Cash = xPlayer.getMoney()
    local date = xPlayer.get('dateofbirth')
    local job = xPlayer.getJob().label
    local jobgrade = xPlayer.getJob().grade_label
    local height = xPlayer.get('height')
    local sex = xPlayer.get('sex')
    cb(PlayerName, Bank, Cash, date, job, jobgrade, height, sex, xPlayer)
end)