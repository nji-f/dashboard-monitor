export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    const { signal } = req.body;
    const PANEL_URL = 'https://pterodactyl.astavvip-tech.xyz';
    const API_KEY = 'ptlc_pvTISSGKYBXTYMO0Q7eCJKYlFnM99gl69vAUi4oNGi3';
    const SERVER_ID = 'a9eb181f';

    try {
        await fetch(`${PANEL_URL}/api/client/servers/${SERVER_ID}/power`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ signal })
        });
        res.status(204).end();
    } catch (error) {
        res.status(500).end();
    }
}
