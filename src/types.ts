/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum BookType {
  PHYSICAL = 'Físico',
  DIGITAL = 'Digital'
}

export enum BookStatus {
  AVAILABLE = 'Disponible',
  IN_PROGRESS = 'En Proceso',
  BORRADOR = 'Borrador'
}

export interface Book {
  id: string;
  title: string;
  author: string;
  type: BookType;
  status: BookStatus;
  points: number;
  image: string;
  category?: string;
  description?: string;
  ownerName?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  level: number;
  avatar: string;
  isPremium: boolean;
  impact: {
    treesSaved: number;
    co2Reduced: number;
  };
}

export interface Match {
  id: string;
  partnerName: string;
  partnerAvatar: string;
  partnerLocation: string;
  distance: string;
  time: string;
  myBook: Book;
  partnerBook: Book;
  matchPercentage: number;
  status: 'PENDING' | 'ACCEPTED' | 'COMPLETED';
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
}
