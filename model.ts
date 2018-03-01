export enum UserColors {
	BLACK = 'black',
	RED = 'red',
	GREEN = 'green',
	YELLOW = 'yellow',
	BLUE = 'blue',
	MAGENTA = 'magenta',
	CYAN = 'cyan',
	WHITE = 'white',
	GRAY = 'gray'
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