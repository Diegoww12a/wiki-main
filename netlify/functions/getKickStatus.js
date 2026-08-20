import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export const handler = async (event) => {
  const channel = event.queryStringParameters?.channel?.trim();

  if (!channel) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isLive: false,
        avatar: null,
      }),
    };
  }

  try {
    const headers = [
      "-A",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/151.0.0.0 Safari/537.36",

      "-H",
      "Accept: application/json, text/plain, */*",

      "-H",
      "Accept-Language: pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",

      "-H",
      `Referer: https://kick.com/${channel}`,

      "-H",
      "Origin: https://kick.com",
    ];

    // =====================================================
    // 1. BUSCAR INFORMAÇÕES DO CANAL
    // =====================================================

    const channelUrl = `https://kick.com/api/v2/channels/${encodeURIComponent(
      channel
    )}`;

    const { stdout: channelStdout } = await execFileAsync(
      "curl",
      [
        "-L",
        "--silent",
        "--show-error",
        "--compressed",
        ...headers,
        channelUrl,
      ],
      {
        timeout: 10000,
        windowsHide: true,
      }
    );

    let channelData = null;

    try {
      channelData = JSON.parse(channelStdout);
    } catch {
      channelData = null;
    }

    // =====================================================
    // 2. PEGAR AVATAR
    // =====================================================

    const avatar =
      channelData?.user?.profile_pic ||
      channelData?.user?.profile_picture ||
      channelData?.profile_pic ||
      channelData?.profile_picture ||
      channelData?.channel?.profile_pic ||
      channelData?.channel?.profile_picture ||
      null;

    // =====================================================
    // 3. VERIFICAR LIVE
    // =====================================================

    const livestreamUrl = `https://kick.com/api/v2/channels/${encodeURIComponent(
      channel
    )}/livestream`;

    const { stdout: livestreamStdout } = await execFileAsync(
      "curl",
      [
        "-L",
        "--silent",
        "--show-error",
        "--compressed",
        ...headers,
        livestreamUrl,
      ],
      {
        timeout: 10000,
        windowsHide: true,
      }
    );

    let livestreamData = null;

    try {
      livestreamData = JSON.parse(livestreamStdout);
    } catch {
      livestreamData = null;
    }

    const isLive = !!livestreamData?.data;

    // =====================================================
    // 4. RETORNO
    // =====================================================

    return {
      statusCode: 200,

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        isLive,
        avatar,
      }),
    };
  } catch (error) {
    console.error("Erro ao consultar Kick:", error.message);

    return {
      statusCode: 200,

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        isLive: false,
        avatar: null,
      }),
    };
  }
};