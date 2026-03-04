export default async function handler(req, res) {
    const PANEL_URL = 'https://pterodactyl.astavvip-tech.xyz';
    const API_KEY = 'ptlc_pvTISSGKYBXTYMO0Q7eCJKYlFnM99gl69vAUi4oNGi3';
    const SERVER_ID = 'a9eb181f';

    try {
        const response = await fetch(`${PANEL_URL}/api/client/servers/${SERVER_ID}/websocket`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch websocket token' });
    }
}
