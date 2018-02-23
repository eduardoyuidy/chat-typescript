
interface Message {
	name: string;
	message: string;
}

export class UserMessage implements Message {
	private data: Message;

	constructor(payload: string) {
		var data = JSON.parse(payload);

		if (!data.name || !data.message) {
			throw new Error('Invalid message payload received: ' + payload);
		}

		this.data = data;
	}

	get name(): string {
		return this.data.name;
	}

	get message(): string {
		return this.data.message;
	}
}

export class UserConnection 
{
	public socket:SocketIO.Socket;
	public user!:UserDetails;
	constructor(socket:SocketIO.Socket)
	{
		this.socket = socket;
	}
	
}

export class UserDetails
{
	constructor(public username: string, public color:string = '', public id: string = '', )
	{
	}
	
}