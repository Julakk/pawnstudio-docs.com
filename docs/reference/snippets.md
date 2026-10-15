---
description: "Kumpulan snippet PAWN siap pakai untuk SA-MP, mulai dari command, timer, sampai dialog."
---

# Snippet PAWN

Contoh kode siap pakai untuk SA-MP. Salin, lalu sesuaikan.

## Kerangka gamemode

```c
#include <a_samp>

main() {}

public OnGameModeInit()
{
    SetGameModeText("Nama Mode");
    AddPlayerClass(0, 1958.3783, 1343.1572, 15.3746, 270.1425, 0, 0, 0, 0, 0, 0);
    return 1;
}
```

## Pesan saat pemain bergabung

```c
public OnPlayerConnect(playerid)
{
    new nama[MAX_PLAYER_NAME], pesan[96];
    GetPlayerName(playerid, nama, sizeof(nama));
    format(pesan, sizeof(pesan), "%s bergabung ke server.", nama);
    SendClientMessageToAll(-1, pesan);
    return 1;
}
```

## Command dengan zcmd

zcmd sudah bawaan APK, jadi nggak perlu dipasang.

```c
#include <a_samp>
#include <zcmd>

CMD:heal(playerid, params[])
{
    SetPlayerHealth(playerid, 100.0);
    SendClientMessage(playerid, -1, "Darah lo sudah penuh.");
    return 1;
}
```

## Command dengan parameter (sscanf)

```c
#include <a_samp>
#include <zcmd>
#include <sscanf2>

CMD:goto(playerid, params[])
{
    new targetid;
    if (sscanf(params, "u", targetid)) return SendClientMessage(playerid, -1, "Pakai: /goto [id/nama]");
    if (!IsPlayerConnected(targetid)) return SendClientMessage(playerid, -1, "Pemain tidak ditemukan.");

    new Float:x, Float:y, Float:z;
    GetPlayerPos(targetid, x, y, z);
    SetPlayerPos(playerid, x, y, z);
    return 1;
}
```

## Timer berulang

```c
public OnGameModeInit()
{
    SetTimer("PesanOtomatis", 60000, true);
    return 1;
}

forward PesanOtomatis();
public PesanOtomatis()
{
    SendClientMessageToAll(0x00FF00FF, "Jangan lupa baca aturan server!");
    return 1;
}
```

## Dialog input

```c
#define DIALOG_NAMA 1

CMD:nama(playerid, params[])
{
    ShowPlayerDialog(playerid, DIALOG_NAMA, DIALOG_STYLE_INPUT, "Nama", "Masukkan nama lo:", "OK", "Batal");
    return 1;
}

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_NAMA)
    {
        if (!response) return 1;
        new pesan[64];
        format(pesan, sizeof(pesan), "Halo, %s!", inputtext);
        SendClientMessage(playerid, -1, pesan);
        return 1;
    }
    return 0;
}
```

::: tip
Mau lebih cepat? Pasang ekstensi snippet lewat panel Ekstensi di PawnStudio.
:::
