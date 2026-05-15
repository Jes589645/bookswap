/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookStatus, BookType, type Book, type User, type Match } from './types.ts';

export const MOCK_USER: User = {
  id: 'u1',
  name: 'Mateo',
  email: 'mateo@universidad.edu',
  points: 540,
  level: 4,
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_p1ttZ0eJ2nNjf6BBgXQCmY5zKXjjai70T2Y8_ooDOBQaXXGkM9rsLbmaz1bTWewM7dZV8306kTnuINnksJz6GiRJt6slP0j_lXbuwU-edZMWwUkTjz3r_KIkxGLIlH2et7SKbHsA2uSslo7Sl_QDF6YRh7pLFOZQ_h2NwehwetY8oBMPOo10jBHwYClPmip1sfGmK21o6S_KBT-VVI2nC8kM61THAxaBqsDqWhbB-dZ8-dtZOWEcX7nRyMSkiMLKl2ftvhk-wU4',
  isPremium: true,
  impact: {
    treesSaved: 12,
    co2Reduced: 85,
  }
};

export const MOCK_BOOKS: Book[] = [
  {
    id: 'b1',
    title: 'Cien Años de Soledad',
    author: 'Gabriel García Márquez',
    type: BookType.PHYSICAL,
    status: BookStatus.AVAILABLE,
    points: 15,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3-kcglzAFFBuWQ7pxvICW0P0zp3VzGEI3o0BtvSEEviIqop6kYN6BuV5DzyEk6hKrRLnNRxeCCAjV7mZpCF3iiou7l3va5CGLekfDq3uyC5V6-Im8g2lNnx8iROovSLaLauy_nxjyhgXJMBOVJ3sWjs1tcG-3st7DxD--ISCh2YlvK5bXWxWaxK_hImDwIGnj8s0OfPWmVijEM_LZ4d_L-n5ZPX8UcD6vUHgwvycHtLaAA3FUjbxJQCr9jSDMwrUIW7X_IataQEQ',
    category: 'Literatura',
    ownerName: 'Lucía R.'
  },
  {
    id: 'b2',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    type: BookType.DIGITAL,
    status: BookStatus.AVAILABLE,
    points: 80,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfJwzMZBQfEJLQWTDko9yQqFm9-BlE2DQmmgZHMjhY5kEz8HTjqt8_tuH8gJLVWbDQwc0Py-LTbxXUr8aa912cmeNm1oF6XuhndFIqs6V6foqn4WoebuRIemijca_3cL8PIHwoCIVGnNhV62F9xPgBN7iOSPXXucb5blqFt1XiAq6YH5PlGSt1fGB8_vUqogeCi26y7VsUgdim19-BX6XlYvGkecnTCE47BJvFBT9AdGW1eQgU8zn8bs7QN5qJrAvz0BxX9BD7OKQ',
    category: 'Ingeniería',
    ownerName: 'Mateo'
  },
  {
    id: 'b3',
    title: 'Meditaciones',
    author: 'Marcus Aurelius',
    type: BookType.PHYSICAL,
    status: BookStatus.AVAILABLE,
    points: 30,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu2hQNgRzESzMGIP6FbC-czGK-PPHGg9_M1Xi-6sFm_lyOhI_4DBz4FoAipMKoL784t35AvJivDWZlhNQ0X7WWfmMyZmjC8zaNWrn3gzf3swEhxdItTFGSkL8TDbOStZvNvO5dRFRb-nMQrRy0RG929e6b9TtpcgKXLPrHeWzfBMDeWKSZq82_vc4h1GsAZyyBZXhimpLBSnhTly2iwNcEmocUpRB8giPZVdC4W9l8d7gfyKD1Q9QLmAS-ucOWLmBAqx2nVTVwRmQ',
    category: 'Filosofía'
  },
  {
    id: 'b4',
    title: 'Sociología Urbana',
    author: 'Simmel, Georg',
    type: BookType.PHYSICAL,
    status: BookStatus.AVAILABLE,
    points: 20,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXKOknfVcbZhDBOyIGjhb3k-P6Hoc8MNfUxuduYhDhHD2pTIUBXubfaj0d8vtrOoYbDS6hszEDQg10MjCB5R_7rUWfFIszqBpHdJwBPw4x4DfK6yV9FNSpD2cEmN297257OXeyujOgxp0_1JZFhEM_0ra7OqUFFahc2gjUe-DL5jwOIhzRWbYSno-GbVUWgFnmOd9mY_IuQAAa_R1YbeSQFtCLylODnQUIfLc5UAdo24L72EAqWCeigvxqRcpcHQqBmaHetpdcYd4',
    category: 'Ciencias Sociales'
  }
];

export const MOCK_MATCHES: Match[] = [
  {
    id: 'm1',
    partnerName: 'Elena Martínez',
    partnerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6UbkXHwRcsX7WKr8M55chSPBUOhEZNw1cm--__iSG39v3qDUbxDeGV_1cn4tUTYWrahhrSKDlOdH8h8etMUKgfDC6Gy_lnmRTbWAWGTX_pV0TyHqePL8_shiZpbcoS9naFNx8x0CyZhODMAzcEGk8dl_2OIeYw8vhtmQ0Uq5Ehjov_ItnDjKgrgshOQeXkgehdmjdPvWaQMvRen_bBq8d_odPrIXzrcDUGKLtUvK2fbNd9N_uk0vPwwi2zCAG-w_umE-vrMb1ac4',
    partnerLocation: 'Campus Central',
    distance: '0.8 km',
    time: 'Ayer, 18:20',
    matchPercentage: 98,
    myBook: MOCK_BOOKS[1],
    partnerBook: MOCK_BOOKS[0],
    status: 'PENDING'
  }
];
