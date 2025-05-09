'use server';

import { Stuff, Condition, Profile, Event } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Adds a new stuff to the database.
 * @param stuff, an object with the following properties: name, quantity, owner, condition.
 */
export async function addStuff(stuff: { name: string; quantity: number; owner: string; condition: string }) {
  // console.log(`addStuff data: ${JSON.stringify(stuff, null, 2)}`);
  let condition: Condition = 'good';
  if (stuff.condition === 'poor') {
    condition = 'poor';
  } else if (stuff.condition === 'excellent') {
    condition = 'excellent';
  } else {
    condition = 'fair';
  }
  await prisma.stuff.create({
    data: {
      name: stuff.name,
      quantity: stuff.quantity,
      owner: stuff.owner,
      condition,
    },
  });
  // After adding, redirect to the list page
  redirect('/list');
}

/**
 * Edits an existing stuff in the database.
 * @param stuff, an object with the following properties: id, name, quantity, owner, condition.
 */
export async function editStuff(stuff: Stuff) {
  // console.log(`editStuff data: ${JSON.stringify(stuff, null, 2)}`);
  await prisma.stuff.update({
    where: { id: stuff.id },
    data: {
      name: stuff.name,
      quantity: stuff.quantity,
      owner: stuff.owner,
      condition: stuff.condition,
    },
  });
  // After updating, redirect to the list page
  redirect('/list');
}

/**
 * Deletes an existing stuff from the database.
 * @param id, the id of the stuff to delete.
 */
export async function deleteStuff(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.stuff.delete({
    where: { id },
  });
  // After deleting, redirect to the list page
  redirect('/list');
}

export async function addEvent(event: { name: string; description: string; location: string; month: string; day: number; year: number; host: string }) {
  // console.log(`addStuff data: ${JSON.stringify(stuff, null, 2)}`);
  await prisma.event.create({
    data: {
      name: event.name,
      description: event.description,
      location: event.location,
      month: event.month,
      day: event.day,
      year: event.year,
      host: event.host,
    },
  });
  // After adding, redirect to the events page
  redirect('/events');
}

export async function editEvent(event: Event) {
  // console.log(`addStuff data: ${JSON.stringify(stuff, null, 2)}`);
  await prisma.event.update({
    where: { id: event.id },
    data: {
      name: event.name,
      description: event.description,
      location: event.location,
      month: event.month,
      day: event.day,
      year: event.year,
      host: event.host,
    },
  });
  // After adding, redirect to the list page
  redirect('/list');
}

export async function deleteEvent(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.event.delete({
    where: { id },
  });
  // After deleting, redirect to the list page
  redirect('/list');
}

/* Edits the profile for a user (or creates one if not made) */
export async function editProfile(profile: Profile) {
  // console.log(`editStuff data: ${JSON.stringify(stuff, null, 2)}`);
  if (profile.id === -1) {
    await prisma.profile.create({
      data: {
        name: profile.name,
        image: profile.image,
        classes: profile.classes,
        aboutme: profile.aboutme,
        grade: profile.grade,
        owner: profile.owner,
      },
    });
  } else {
    await prisma.profile.update({
      where: { id: profile.id },
      data: {
        name: profile.name,
        image: profile.image,
        classes: profile.classes,
        aboutme: profile.aboutme,
        grade: profile.grade,
        owner: profile.owner,
      },
    });
  }
  // After updating, redirect to the Profile page
  redirect('/profile');
}

/**
 * Creates a new user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createUser(credentials: { email: string; password: string }) {
  // console.log(`createUser data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      email: credentials.email,
      password,
    },
  });
}

/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  // console.log(`changePassword data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}
