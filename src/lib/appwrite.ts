import { PUBLIC_PROJECT_ID } from '$env/static/public';
import { Account, Client } from 'appwrite';

export const client = new Client()
	.setEndpoint("https://backend.applocker.xyz/v1")
	.setProject(PUBLIC_PROJECT_ID);

export const account = new Account(client);