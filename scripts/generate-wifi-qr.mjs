// Regenerate the WiFi QR code image whenever the network name or password change:
//   node scripts/generate-wifi-qr.mjs "<network-name>" "<password>" public/images/wifi-qr.png
import QRCode from 'qrcode';

const [, , ssid, password, outPath] = process.argv;

if (!ssid || !password || !outPath) {
  console.error('Usage: node scripts/generate-wifi-qr.mjs "<ssid>" "<password>" <output-path>');
  process.exit(1);
}

const wifiString = `WIFI:T:WPA;S:${ssid};P:${password};H:false;;`;

await QRCode.toFile(outPath, wifiString, {
  width: 480,
  margin: 2,
  color: { dark: '#2b2621', light: '#faf5ec' },
});

console.log(`WiFi QR code written to ${outPath}`);
