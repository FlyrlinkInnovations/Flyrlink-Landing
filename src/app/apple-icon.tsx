import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #1e4de8 0%, #163399 50%, #0f1d4d 100%)',
          color: '#ffffff',
          fontSize: 140,
          fontWeight: 500,
          fontStyle: 'italic',
          fontFamily: 'Georgia, serif',
          borderRadius: 40,
          lineHeight: 1,
          paddingBottom: 20,
        }}
      >
        f
      </div>
    ),
    size
  );
}
