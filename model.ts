export class UserConnection 
{
	public socket: SocketIO.Socket;
	public user!:UserDetails;
	constructor(socket: SocketIO.Socket)
	{
		this.socket = socket;
	}
	
}

export class UserDetails
{
	constructor(public username: string, public color: string = '', public id: string = '' )
	{
	}	
}