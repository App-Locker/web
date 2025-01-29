import { Account, Client, ID } from 'appwrite';
import { PUBLIC_PROJECT_ID } from '$env/static/public';

export const client = new Client()
	.setEndpoint("https://backend.applocker.xyz/v1")
	.setProject(PUBLIC_PROJECT_ID);

export const account = new Account(client);