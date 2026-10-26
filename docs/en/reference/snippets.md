---
description: "A collection of ready-to-use PAWN snippets for SA-MP, from commands and timers to dialogs."
---

# PAWN Snippets

Ready-to-use code examples for SA-MP. Copy them, then adapt.

## Gamemode skeleton

```c
#include <a_samp>

main() {}

public OnGameModeInit()
{
    SetGameModeText("Mode Name");
    AddPlayerClass(0, 1958.3783, 1343.1572, 15.3746, 270.1425, 0, 0, 0, 0, 0, 0);
    return 1;
}
```

## Message when a player joins

```c
public OnPlayerConnect(playerid)
{
    new name[MAX_PLAYER_NAME], message[96];
    GetPlayerName(playerid, name, sizeof(name));
    format(message, sizeof(message), "%s joined the server.", name);
    SendClientMessageToAll(-1, message);
    return 1;
}
```

## Commands with zcmd

zcmd is bundled in the APK, so there's nothing to install.

```c
#include <a_samp>
#include <zcmd>

CMD:heal(playerid, params[])
{
    SetPlayerHealth(playerid, 100.0);
    SendClientMessage(playerid, -1, "Your health is full.");
    return 1;
}
```

## Commands with parameters (sscanf)

```c
#include <a_samp>
#include <zcmd>
#include <sscanf2>

CMD:goto(playerid, params[])
{
    new targetid;
    if (sscanf(params, "u", targetid)) return SendClientMessage(playerid, -1, "Usage: /goto [id/name]");
    if (!IsPlayerConnected(targetid)) return SendClientMessage(playerid, -1, "Player not found.");

    new Float:x, Float:y, Float:z;
    GetPlayerPos(targetid, x, y, z);
    SetPlayerPos(playerid, x, y, z);
    return 1;
}
```

## Repeating timer

```c
public OnGameModeInit()
{
    SetTimer("AutoMessage", 60000, true);
    return 1;
}

forward AutoMessage();
public AutoMessage()
{
    SendClientMessageToAll(0x00FF00FF, "Don't forget to read the server rules!");
    return 1;
}
```

## Input dialog

```c
#define DIALOG_NAME 1

CMD:name(playerid, params[])
{
    ShowPlayerDialog(playerid, DIALOG_NAME, DIALOG_STYLE_INPUT, "Name", "Enter your name:", "OK", "Cancel");
    return 1;
}

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_NAME)
    {
        if (!response) return 1;
        new message[64];
        format(message, sizeof(message), "Hello, %s!", inputtext);
        SendClientMessage(playerid, -1, message);
        return 1;
    }
    return 0;
}
```

::: tip
Want to go faster? Install the snippet extension from the Extensions panel in PawnStudio.
:::
